export const theme = {
    colors: {
        text: {
            1: 'var(--ui-text-1)',
            2: 'var(--ui-text-2)',
            3: 'var(--ui-text-3)'
        },
        hover: 'var(--ui-color-hover)',
        focus: 'var(--ui-color-focus)',
        active: 'var(--ui-color-active)',
        primary: 'var(--ui-color-primary)',
        'primary-hover': 'var(--ui-color-primary-hover)',
        'primary-active': 'var(--ui-color-primary-active)',
        danger: 'var(--ui-color-danger)',
        'danger-hover': 'var(--ui-color-danger-hover)',
        'danger-active': 'var(--ui-color-danger-active)',
        bd: {
            line: 'var(--ui-bd-line)'
        },
        bg: {
            0: 'var(--ui-bg-0)',
            1: 'var(--ui-bg-1)',
            2: 'var(--ui-bg-2)',
            3: 'var(--ui-bg-3)'
        }
    },
    borderRadius: {
        round: '999vmax',
        'radius-s': 'var(--ui-radius-s)',
        'radius-m': 'var(--ui-radius-m)',
        'radius-l': 'var(--ui-radius-l)'
    },
    boxShadow: {
        'shadow-s': 'var(--ui-shadow-s)',
        'shadow-m': 'var(--ui-shadow-m)',
        'shadow-l': 'var(--ui-shadow-l)'
    }
}

export const shortcuts = {
    'scrollbar-custom':
					'scrollbar:w-4px scrollbar:h-4px scrollbar-thin scrollbar-thumb:rounded hover:scrollbar-thumb:bg-[rgba(var(--ui-scrollbar),0.4)]'
}