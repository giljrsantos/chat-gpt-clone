import { ChatMesseInput } from './ChatMesseInput';

type Props = {
  disabled: boolean;
  onSendMessege: (messege: string) => void;
};

export const Footer = ({
  disabled,
  onSendMessege,
}: Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p2">
      <div className="max-w-7xl m-auto">
        <ChatMesseInput
          disabled={disabled}
          onSend={onSendMessege}
        />
        <div className="pt-3 text-center text-xs text-gray-300">
          Feito pelo CAPIAU
          <br />
          <a className="underline" href="#">
            Curso
          </a>
        </div>
      </div>
    </footer>
  );
};
