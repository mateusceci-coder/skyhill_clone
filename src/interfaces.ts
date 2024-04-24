export interface ProductsParams {
    id: string
    image: string
    title: string
    oldPrice?: number
    price: number
    installment?: string
    color?: string
    size: string[]
    review: number
    numbersReview: number
    banner?: string
    smImages: string[]
    lgImage: string
}

interface ProductsKitsParams {
    sizeGrip: string
    sizeCinto: string
    sizeJoelheira: string
}

export interface KitsParams {
    id: string
    products: ProductsKitsParams
}