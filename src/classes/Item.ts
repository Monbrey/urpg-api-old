import type { Client } from "../client/Client";
import { Item } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
import { RequestHandler } from "../rest/RequestHandler";

export class ItemEndpoint extends CrudEndpoint<Item> {
	public constructor(client: Client) {
		super(client, "item");
	}

	public async fetchType(name: string): Promise<Item[]> {
		const data = await RequestHandler.handle<Item[]>(`${this.url}/type/${name}`);
		return data;
	}

	// public async create(): Promise<Item> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async update(): Promise<Item> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async delete(): Promise<Item> {
	// 	throw new Error("Method not implemented.");
	// }
}
