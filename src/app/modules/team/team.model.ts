import mongoose, { Document, Schema } from "mongoose";

interface ISocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
}

interface ITeamMember extends Document {
  image: string;
  name: string;
  designation: string;
  social_links: ISocialLinks;
}

const SocialLinksSchema: Schema = new Schema({
  facebook: { type: String, required: true },
  twitter: { type: String, required: true },
  instagram: { type: String, required: true },
});

const TeamMemberSchema: Schema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  designation: { type: String, required: true },
  social_links: { type: SocialLinksSchema, required: true },
});

const TeamMemberModel = mongoose.model<ITeamMember>(
  "TeamMember",
  TeamMemberSchema
);

export default TeamMemberModel;
export { ISocialLinks, ITeamMember };
