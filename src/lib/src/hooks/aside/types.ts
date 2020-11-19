export type AsideDisplayState = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export type AsideWrapperProps = React.PropsWithChildren<Omit<AsideController, 'component'>>;
export interface AsideWrapper<P = AsideWrapperProps> extends React.FunctionComponent<P> {}

export interface AsideController {
    component: false | React.ReactPortal;
    displayState: AsideDisplayState;
}

export interface AsideProps {
    fromElement?: HTMLElement | null;
    enableOverlay?: boolean;
    wrappers?: AsideWrapper[];
}
