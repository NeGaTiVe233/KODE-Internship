export const formatBirthday = (dateString: string): string => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
  
    const monthNames = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
    return `${day} ${monthNames[month - 1]}`
  }
  
  export const formatFullDate = (dateString: string): string => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
  
    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ]
    return `${day} ${monthNames[month - 1]} ${year}`
  }
  
  export const calculateAge = (dateString: string): number => {
    const birthDate = new Date(dateString)
    const today = new Date()
  
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
  
    return age
  }
  
  