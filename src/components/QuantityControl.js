export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrease}
          className="bg-gray-200 w-8 h-8 rounded-md text-lg font-bold hover:bg-gray-300"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={onIncrease}
          className="bg-gray-200 w-8 h-8 rounded-md text-lg font-bold hover:bg-gray-300"
        >
          +
        </button>
      </div>
    );
  }
  