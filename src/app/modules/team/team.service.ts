import TeamMemberModel from "./team.model";

const getTeamMembers = async () => {
  const teamMembers = await TeamMemberModel.find();
  return teamMembers;
};

export const TeamServices = {
  getTeamMembers,
};
