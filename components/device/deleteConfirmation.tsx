import Button from "../ui/button";
import Modal from "../ui/modal";

interface DeleteConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  deviceName: string;
}

const DeleteConfirm = ({
  isOpen,
  onClose,
  onConfirm,
  deviceName,
}: DeleteConfirmProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Device">
      <p className="text-sm text-gray-600 mb-6">
        Are you sure you want to delete&nbsp;
        <span className="font-medium text-gray-900">{deviceName}</span>?
      </p>
      <div className="flex items-center justify-end gap-3">
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirm;
