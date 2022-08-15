import * as React from 'react';
import Typography from '@mui/material/Typography';

type TextVariant = 
| 'body1'
| 'body2'
| 'button'
| 'caption'
| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'inherit'
| 'overline'
| 'subtitle1'
| 'subtitle2'

type Color =
| 'primary.main'
| 'secondary.main'
| 'error.main'
| 'warning.main'
| 'info.main'
| 'success.main'
| 'text.primary'
| 'text.secondary'
| 'text.disabled'

type TextProps = {
	children: React.ReactNode
	variant?: TextVariant
	color?: Color
	m?: number
	mt?: number
	mr?: number
	mb?: number
	ml?: number
	p?: number
	pt?: number
	pr?: number
	pb?: number
	pl?: number
}

export const Text: React.FC<TextProps> = props  => {
	const {
    children,
    variant = 'body1',
    color = 'text.primary',
		m = 0,
		mt = 0,
		mr = 0,
		mb = 0,
		ml = 0,
		p = 0,
		pt = 0,
		pr = 0,
		pb = 0,
		pl = 0
  } = props;
	return (
      <Typography variant={variant} component="span" sx={{ color, m,	mt, mr,	mb,	ml,	p, pt, pr, pb, pl }}>
        {children}
      </Typography>
	)
}
