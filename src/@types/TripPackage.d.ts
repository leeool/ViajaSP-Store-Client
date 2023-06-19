interface ITripPackage {
  id: string
  price: number
  transport: string
  departureDate: string
  returnDate: string
  city: ICity
  categories: ICategory[]
  accommodation: IAccommodation
}
