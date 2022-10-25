import { Schema, model } from "mongoose";
export const ROLES = ["admin", "operario", "cliente"]
const roleSchema = new Schema(
    {
    name: String,
    },
    {
    versionKey: false,
    }
);

export default model("Role", roleSchema);