export type User = {
	email: string;
	name: string;
	role: string;
};

export type Species = {
	id: string;
	name: string;
	class?: string;
	photo?: string;
};

export type Animal = {
	speciesId: string;
	nickname: string;
	birthdate: Date;
	gender: string;
	weight: number;
	photo: string;
	health: string;
	description: string;
};

export type Report = {
	description: string;
	photo_url: string;
	is_request_doctor: boolean;
	animal_id: string;
};
