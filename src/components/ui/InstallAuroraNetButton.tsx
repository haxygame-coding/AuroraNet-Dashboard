import Button from "@components/Button";
import { Modal, ModalTrigger } from "@components/modal/Modal";
import { DownloadIcon } from "lucide-react";
import React, { useState } from "react";
import SetupModal from "@/modules/setup-auroranet-modal/SetupModal";

export function InstallAuroraNetButton() {
  const [installModal, setInstallModal] = useState(false);

  return (
    <Modal open={installModal} onOpenChange={setInstallModal}>
      <ModalTrigger asChild>
        <Button variant={"secondary"} size={"sm"}>
          <DownloadIcon size={16} />
          Install AuroraNet
        </Button>
      </ModalTrigger>
      <SetupModal />
    </Modal>
  );
}
