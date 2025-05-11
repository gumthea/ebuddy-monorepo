'use client';

import { Button } from '@mui/material';
import { DeleteOutlineTwoTone, EditOutlined } from '@mui/icons-material';

interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
  return (
    <>
      <Button variant="text" size="small" onClick={onEdit}>
        <EditOutlined />
      </Button>
      <Button variant="text" size="small" onClick={onDelete}>
        <DeleteOutlineTwoTone />
      </Button>
    </>
  );
}
