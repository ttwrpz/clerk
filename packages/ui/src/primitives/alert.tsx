import { cx } from 'cva';
import * as React from 'react';

import * as Icon from './icon';

export const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    intent?: 'warning' | 'error';
  }
>(function Alert({ children, className, intent = 'error', ...props }, forwardedRef) {
  return (
    <div
      ref={forwardedRef}
      {...props}
      className={cx(
        'leading-small rounded-md border px-4 py-3 text-base',
        {
          warning: 'text-warning bg-warning/[0.06] border-warning/[0.12]',
          error: 'text-danger bg-danger/[0.06] border-danger/[0.12]',
        }[intent],
        className,
      )}
    >
      <div className='flex gap-x-2'>
        <span className='mt-px shrink-0 *:size-4'>
          {
            {
              error: <Icon.ExclamationOctagonSm />,
              warning: <Icon.ExclamationTriangleSm />,
            }[intent]
          }
        </span>
        {children}
      </div>
    </div>
  );
});
