import { Link } from "react-router-dom";
import Button from "./Button";

function EmptyState({ icon: Icon, title, message, actionLabel, actionTo }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      {Icon && <Icon className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />}
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{message}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </div>
  );
}

export default EmptyState;
