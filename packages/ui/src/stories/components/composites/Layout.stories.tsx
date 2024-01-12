import { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  Form,
  Grid,
  Heading,
  HStack,
  InputField,
  InputGroup,
  VStack
} from '@lifespikes/ui/components/ui';
import { useForm } from 'react-hook-form';

const ExampleLayout = (props: PropsWithChildren) => {
  return <div>{props.children}</div>;
};

const meta = {
  title: 'Composites/Layout',
  component: ExampleLayout,
  args: {
    children: null,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExampleLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingExample: Story = {
  args: {
    children: <Heading variant="xl">Heading</Heading>,
  },
};

export const FlexExample: Story = {
  args: {
    children: (
      <Flex className="flex-row space-x-2">
        <div>Flex</div>
        <div>Component</div>
      </Flex>
    ),
  },
};

export const GridExample: Story = {
  args: {
    children: (
      <Grid className="grid-cols-1 gap-y-2">
        <div>Grid</div>
        <div>Component</div>
      </Grid>
    ),
  },
};

export const HStackExample: Story = {
  args: {
    children: (
      <HStack>
        <div>HStack</div>
        <div>Component</div>
      </HStack>
    ),
  },
};

export const VStackExample: Story = {
  args: {
    children: (
      <VStack>
        <div>VStack</div>
        <div>Component</div>
      </VStack>
    ),
  },
};

export const InputGroupExample: Story = {
  args: {
    children: (
      <InputGroup className="md:grid-cols-2 lg:gap-y-4">
        <InputField name="example_1" label="test" />
        <InputField name="example_2" />
        <InputField name="example_3" />
        <InputField name="example_4" />
      </InputGroup>
    ),
  },
  render: (args) => {
    const form = useForm();
    return (
      <div className="max-w-2xl">
        <Form {...form}>{args.children}</Form>
      </div>
    );
  },
};

export const ButtonGroupExample: Story = {
  args: {
    children: (
      <ButtonGroup className="justify-end">
        <Button variant="outline">Ok</Button>
        <Button>Manage Company Locations</Button>
      </ButtonGroup>
    ),
  },
};
