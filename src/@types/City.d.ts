interface ICity {
  id: string
  name: string
  state: string
  attractions: string
  images: string[]
  about: string
  categories: ICategory[]
  tripPackages: ITripPackage[]
}
