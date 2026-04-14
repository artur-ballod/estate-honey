export interface AppPartnerItem {
	id: string
	src: string
	alt: string
	width: number
	height: number
}

export interface AppPartnersContent {
	title: string
	items: AppPartnerItem[]
}