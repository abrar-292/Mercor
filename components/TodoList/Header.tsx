import Image from "next/image";

export const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`flex items-center justify-between h-12 text-sm text-dark-200 border-b-3 ${
        bg === "purple"
          ? `border-purple-500`
          : bg === "orange"
          ? `border-orange-500`
          : "border-green-500"
      }`}
    >
      <div className="flex items-center">
        <div
          className={`h-2 w-2 rounded-full mr-2 ${
            bg === "purple"
              ? `bg-purple-500`
              : bg === "orange"
              ? `bg-orange-500`
              : "bg-green-500"
          }`}
        />
        {text}
        <div
          className="ml-2 bg-gray-200 w-5 h-5 text-gray-500 rounded-full flex items-center justify-center
        "
        >
          {count}
        </div>
      </div>
      {text === "To Do" && (
        <Image
          src={"/images/add-square-card.svg"}
          alt="add_car_icon"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      )}
    </div>
  );
};
