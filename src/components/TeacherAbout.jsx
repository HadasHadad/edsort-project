import React from "react";
import teacherImage from '../assets/images/teacher.png';

export default function TeacherAbout() {
    return (
        <div id="teacherDiv" className="flex justify-around mt-3 mb-3 font-mono text-xs">
            <div className="mr-5 flex flex-col items-center">
                <div className="relative h-20 w-20">
                    <img className="h-full w-full rounded-md" src={teacherImage} alt="Teacher" />
                    <p className="absolute bottom-0 left-0 right-0 px-1 py-1 rounded border bg-white text-xs font-assistant">
                        קובי קובי
                    </p>
                </div>
            </div>
            <div className="mr-5">
                <p className="font-assistant ml-4">
                    קובי קובי (Jacob Two-Two) – ילד החובב את ענפי הספורט הוקי קרח והיאבקות. הצעיר מבין חמישה ילדים. הוא מסתבך בהרבה צרות מבלי שהוא שם לב, מפני שהוא תמיד אומר את האמת.
                </p>
            </div>
        </div>
    );
}
