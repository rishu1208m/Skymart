import { Minus, Plus } from "lucide-react";

function QuantitySelector({ quantity, onIncrease, onDecrease, min = 1 }) {
  return (
    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-l-lg"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="w-10 text-center font-medium text-gray-800 dark:text-gray-100">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

export default QuantitySelector;
