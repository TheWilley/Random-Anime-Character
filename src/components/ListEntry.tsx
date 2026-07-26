import type { IconProps } from '@mdi/react/dist/IconProps';
import { Icon } from '@mdi/react';

export function ListEntry({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: IconProps['path'];
}) {
  return (
    <li className='flex items-center justify-between p-3 rounded-lg bg-slate-800 border border-slate-700/60'>
      <span className='flex items-center gap-2 font-medium pr-5'>
        {icon && <Icon path={icon} size={0.8} className='text-primary' />}
        <span>{label}</span>
      </span>
      <span className='font-semibold'>{value}</span>
    </li>
  );
}
