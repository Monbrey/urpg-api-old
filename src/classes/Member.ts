import type { Client } from "../client/Client";
import { Member } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";

export class MemberEndpoint extends CrudEndpoint<Member> {
	public constructor(client: Client) {
		super(client, "member");
	}

	// public async create(): Promise<Attack> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async update(): Promise<Attack> {
	// 	throw new Error("Method not implemented.");
	// }

	// public async delete(): Promise<Attack> {
	// 	throw new Error("Method not implemented.");
	// }
}