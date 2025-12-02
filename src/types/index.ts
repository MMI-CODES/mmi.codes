export interface ToolValue {
	titre: string;
	site: string;
	author?: string;
	description?: string;
	emoji?: string;
}

export interface MessageValue {
	type: 'message' | 'image';
	titre: string;
	content?: string;
	author?: string;
	link?: string;
	image?: string;
	date?: string;
	location?: string;
	expires?: string
}