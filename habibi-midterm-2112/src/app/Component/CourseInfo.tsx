interface CourseInfoProps {
  courseName: string;
}

export default function CourseInfo({ courseName }: CourseInfoProps) {
  return (
    <li className="text-lg text-gray-700 dark:text-gray-300 py-2">
      {courseName}
    </li>
  );
}
