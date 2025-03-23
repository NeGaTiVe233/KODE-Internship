import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { setSortType } from "../../store/slices/filterSlice"
import { sortUsersByAlphabet, sortUsersByBirthday } from "../../store/slices/usersSlice"
import type { SortType } from "../../api/types"
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  SortOption,
  RadioButton,
  RadioButtonLabel,
} from "./SortModal.styles"

interface SortModalProps {
  onClose: () => void
}

const SortModal = ({ onClose }: SortModalProps) => {
  const dispatch = useAppDispatch()
  const { sortType } = useAppSelector((state) => state.filter)

  const handleSortChange = (type: SortType) => {
    dispatch(setSortType(type))

    if (type === "alphabet") {
      dispatch(sortUsersByAlphabet())
    } else {
      dispatch(sortUsersByBirthday())
    }

    onClose()
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Сортировка</ModalTitle>
          <CloseButton onClick={onClose}>
            <img src="/close.png" width="24" height="24" alt="Закрыть" />
          </CloseButton>
        </ModalHeader>
        <SortOption onClick={() => handleSortChange("alphabet")}>
          <RadioButton checked={sortType === "alphabet"}>{sortType === "alphabet" && <span></span>}</RadioButton>
          <RadioButtonLabel>По алфавиту</RadioButtonLabel>
        </SortOption>
        <SortOption onClick={() => handleSortChange("birthday")}>
          <RadioButton checked={sortType === "birthday"}>{sortType === "birthday" && <span></span>}</RadioButton>
          <RadioButtonLabel>По дню рождения</RadioButtonLabel>
        </SortOption>
      </ModalContent>
    </ModalOverlay>
  )
}

export default SortModal

