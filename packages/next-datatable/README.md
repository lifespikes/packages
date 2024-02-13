# next-datatable

`next-datatable` is a library created using Shadcn, react-table, and nuqs. The goal is to provide a data table with the ability to have a simple API, thanks to the support of react-table, a user-friendly interface using Shadcn, and the capability to automatically save its state in the URL with nuqs.


# Usage

```tsx
import { NextDataTable } from '@lifespikes/next-datatable';


export const columns: ColumnDef<any>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <CheckboxPrimitive
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <CheckboxPrimitive
        className="border-gray-400 data-[state=checked]:border-white"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex space-x-2 text-primary">
        <File className="h-4 w-4" />
        <span>{row.getValue('name')}</span>
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <Button size="icon">
          <DownloadCloud className="h-4 w-4" />
        </Button>
      );
    }
  }
];


const UsersTable = () => {
  const { data } = useGetUsers(); // Fetching data.


  return <NextDataTable data={data} columns={columns} />;
};
```

