import React from "react";
import { Link } from "react-router-dom";

export default function StudentList({ students }) {
	return (
		<ul>
			{students.map((student, i) => (
				<li>
					<Link to={`/${student.id}`}>
						{student.firstName} {student.lastName}
					</Link>
				</li>
			))}
		</ul>
	);
}
