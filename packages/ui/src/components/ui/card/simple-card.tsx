import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@lifespikes/ui/components/ui';

type CardPartsProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

export type SimpleCardProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'content' | 'title' | 'footer' | 'description'
> &
  CardPartsProps & {
    _cardHeaderProps?: React.HTMLAttributes<HTMLDivElement>;
    _cardTitleProps?: React.HTMLAttributes<HTMLHeadingElement>;
    _cardDescriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
    _cardContentProps?: React.HTMLAttributes<HTMLDivElement>;
    _cardFooterProps?: React.HTMLAttributes<HTMLDivElement>;
  };

const SimpleCard = ({
  title,
  description,
  content,
  children,
  footer,
  _cardHeaderProps,
  _cardTitleProps,
  _cardDescriptionProps,
  _cardContentProps,
  _cardFooterProps,
  ...props
}: SimpleCardProps) => {
  return (
    <Card {...props}>
      <CardHeader {..._cardHeaderProps}>
        <CardTitle {..._cardTitleProps}>{title}</CardTitle>
        <CardDescription {..._cardDescriptionProps}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent {..._cardContentProps}>{content ?? children}</CardContent>
      <CardFooter {..._cardFooterProps}>{footer}</CardFooter>
    </Card>
  );
};

export { SimpleCard };
