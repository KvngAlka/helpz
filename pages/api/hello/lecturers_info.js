
import { LIST_TYPE } from "../../../lib/state_manager/constants";

export default function handler(req, res) {
  res.status(200).json(
    { 
      title : "Lecturers' Info",
      type : LIST_TYPE,
      data : [
        `Mr. Elliot- Examination officer , email : elliot@ucc.edu.gh`,
        `Mr. Kofi Akotoye- Procurement officer, email : kakotoye@ucc.edu.gh`,
        `Mr. Paul Arhin- Attachment /Internship Officer,  email : parhin@ucc.edu.gh`,
        `Dr. Alimatu Yussiff- PhD Coordinator , email : ayussiff@ucc.edu.gh`,
        `Mrs. Regina Segbefia - Lecturer, email : rsegbefia@ucc.edu.gh`
      ]
    }
  )
}
