import classNames from 'classnames';
import React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

import { cn } from '@lifespikes/ui/lib/utils';
import { Button, Flex, VStack } from '@lifespikes/ui/components/ui';
import { File, UploadCloud, XIcon } from 'lucide-react';

export interface DropZoneProps extends DropzoneOptions {
  value?: File | null;
  onChange?: (file: File | null) => void;
}

export const DropZone: React.FC<DropZoneProps> = ({
  onChange,
  value,
  ...props
}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    ...props,
    onDropAccepted: (files) => {
      onChange?.(files[0] ?? null);
    },
  });

  const handleRemoveFile = () => {
    onChange?.(null);
  };

  return (
    <div className="relative">
      <Button
        variant="unstyled"
        {...getRootProps({
          className: cn(
            'border-dashed rounded-lg border-2 h-40 p-0 w-full',
            value && !isDragActive
              ? 'border-primary hover:border-primary'
              : {
                  'border-success hover:border-green-400':
                    (isDragActive && !isDragReject) || isDragAccept,
                  'border-error hover:border-error': isDragReject,
                },
          ),
          type: 'button',
        })}
      >
        <input {...getInputProps()} />
        <VStack className="w-full h-full items-center justify-center font-normal">
          {value && !isDragActive ? (
            <Flex className="space-x-2 text-primary text-lg">
              <File className="w-6 h-6" />
              <span>{value.name}</span>
            </Flex>
          ) : (
            <>
              <UploadCloud
                className={classNames('w-6 h-6', {
                  'text-success':
                    (isDragActive && !isDragReject) || isDragAccept,
                  'text-error': isDragReject,
                })}
              />
              <span
                className={classNames('text-lg', {
                  'text-success':
                    (isDragActive && !isDragReject) || isDragAccept,
                  'text-error': isDragReject,
                })}
              >
                {isDragActive ? 'Drop your file here' : 'Upload or drop file'}
              </span>
            </>
          )}
        </VStack>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-2"
        onClick={handleRemoveFile}
      >
        <XIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};
