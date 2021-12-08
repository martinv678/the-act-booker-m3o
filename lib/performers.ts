import type { Performer } from "./types";
import { DbClient } from "./utils";

const TABLE_NAME = "performers";

export const performers = new DbClient<Performer>({ tableName: TABLE_NAME });
