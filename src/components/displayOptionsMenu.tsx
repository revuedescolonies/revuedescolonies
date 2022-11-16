import React from "react"

import Button from "@mui/material/Button"
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Popper from '@mui/material/Popper'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'

import ExpandMore from '@mui/icons-material/ExpandMore'
import MenuOpen from "@mui/icons-material/MenuOpen"
import useMediaQuery from "@mui/material/useMediaQuery"
import theme from "../theme"
import { PropTypes } from "@mui/material"

interface Props {
  children?: JSX.Element
  label: string
  closeOnClick?: boolean
  forceLabel?: boolean
  color?: PropTypes.Color
}

export default function DisplayOptionsMenu({children, label, forceLabel = false, closeOnClick = false, color = "secondary"}: Props) {  
  // Menu Visibility
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLAnchorElement>(null)
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'))

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: MouseEvent | TouchEvent) => {
    const el = event.target
    const node = anchorRef.current
    if (el instanceof Node && node && node.contains(el)) {
      return
    }

    setOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const handleClick = () => {
    if (closeOnClick) {
      setOpen(false)
    }
  }

  // return focus to the button when we transition from closed to open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef?.current?.focus()
    }

    prevOpen.current = open
  }, [open])

  return (<>
    <Button 
      {...{ ref: anchorRef } as any}
      color={color}
      endIcon={!forceLabel && isScreenSmall ? '' : <ExpandMore/>}
      aria-controls={open ? 'menu-list-grow' : undefined}
      aria-haspopup="true"
      onClick={handleToggle}>
      {!forceLabel && isScreenSmall ? <MenuOpen/> : label}
    </Button>
    <Popper style={{zIndex: 99}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} onClick={handleClick}>
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  </>)

}