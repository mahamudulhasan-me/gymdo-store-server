import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { TeamServices } from "./team.service";

const getTeamMembers = asyncHandler(async (req, res) => {
  const teamMembers = await TeamServices.getTeamMembers();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Team members fetched successfully",
    data: teamMembers,
  });
});

export const TeamControllers = {
  getTeamMembers,
};
