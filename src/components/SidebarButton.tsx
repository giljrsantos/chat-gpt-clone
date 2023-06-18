import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

export const SidebarButton = ({
  icon,
  label,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onclick}
      className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/20"
    ></div>
  );
};
