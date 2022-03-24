import CircularProgress from '@material-ui/core/CircularProgress';

type LoadingProps = {
    size?: number;
    color?: string;
}

export function Loading({size, color}: LoadingProps) {

    return (
        <CircularProgress 
            size={size}
            style={{
                color
            }}
        />
    );
}