import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@lifespikes/ui/components/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export const Example: Story = {
  render: () => {
    return <CarouselDemo />;
  },
} as unknown as Story;
