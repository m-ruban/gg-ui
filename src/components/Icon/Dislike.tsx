import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Dislike: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.2852 13.125L14.2852 12.125C14.2135 12.125 14.142 12.1327 14.0719 12.148L14.2852 13.125ZM10.5669 18.5L11.5282 18.7755L11.5282 18.7755L10.5669 18.5ZM7.37884 17.9454L6.38273 17.857L6.38219 17.8637L7.37884 17.9454ZM8.0669 13.5L9.01558 13.8162C9.11723 13.5113 9.06609 13.1761 8.87814 12.9153C8.69019 12.6545 8.38834 12.5 8.0669 12.5L8.0669 13.5ZM2.0669 7.5L1.07035 7.41695L2.0669 7.5ZM13.188 3.5001L13.1059 4.49673L13.1059 4.49673L13.188 3.5001ZM15.0823 12.125L14.2852 12.125L14.2852 14.125L15.0823 14.125L15.0823 12.125ZM9.60559 18.2245C9.50994 18.5583 9.42152 18.809 9.32156 18.9692C9.2765 19.0415 9.2554 19.0508 9.27218 19.0391C9.30186 19.0184 9.35222 19 9.3976 19L9.3976 21C10.2306 21 10.7446 20.4668 11.0185 20.0278C11.283 19.6037 11.4339 19.1044 11.5282 18.7755L9.60559 18.2245ZM9.3976 19L8.06689 19L8.06689 21L9.3976 21L9.3976 19ZM8.06689 19C8.17549 19 8.28925 19.0374 8.37892 19.1025C8.45559 19.1582 8.4807 19.209 8.47665 19.2015C8.46053 19.1719 8.42073 19.0609 8.39373 18.8473C8.3691 18.6525 8.36371 18.4455 8.3658 18.279C8.36682 18.1979 8.36955 18.131 8.3719 18.0859C8.37308 18.0635 8.37415 18.0467 8.37484 18.0365C8.37519 18.0314 8.37544 18.028 8.37556 18.0264C8.37562 18.0257 8.37564 18.0253 8.37563 18.0254C8.37563 18.0255 8.37561 18.0257 8.37559 18.026C8.37558 18.0261 8.37556 18.0263 8.37555 18.0265C8.37554 18.0266 8.37552 18.0268 8.37552 18.0268C8.3755 18.027 8.37549 18.0272 7.37884 17.9454C6.38219 17.8637 6.38217 17.8639 6.38215 17.8641C6.38215 17.8642 6.38213 17.8644 6.38211 17.8646C6.38209 17.8649 6.38206 17.8653 6.38203 17.8657C6.38196 17.8664 6.38189 17.8674 6.38181 17.8684C6.38164 17.8705 6.38144 17.8731 6.38121 17.8762C6.38074 17.8824 6.38015 17.8905 6.37947 17.9005C6.37811 17.9204 6.37639 17.9478 6.37463 17.9815C6.37112 18.0488 6.36736 18.1424 6.36596 18.2539C6.36321 18.4727 6.36921 18.7793 6.40952 19.0981C6.44745 19.3981 6.52612 19.8009 6.71932 20.1564C6.9261 20.537 7.3554 21 8.06689 21L8.06689 19ZM8.0669 12.5L3.9522 12.5L3.9522 14.5L8.0669 14.5L8.0669 12.5ZM3.9522 12.5C4.06973 12.5 3.78599 12.5563 3.46682 11.8755C3.14866 11.1969 2.87081 9.89464 3.06344 7.58304L1.07035 7.41695C0.862983 9.90535 1.13023 11.6031 1.65595 12.7245C2.18066 13.8437 3.03957 14.5 3.9522 14.5L3.9522 12.5ZM3.06344 7.58304C3.15207 6.51955 3.42834 5.8128 3.75407 5.33579C4.07729 4.86244 4.486 4.56113 4.92957 4.36323C5.8694 3.94393 6.89817 4 7.5669 4L7.5669 2C7.04959 2 5.52835 1.90607 4.1147 2.53676C3.38152 2.86387 2.66261 3.38756 2.1024 4.20796C1.5447 5.0247 1.18173 6.08045 1.07035 7.41695L3.06344 7.58304ZM7.5669 4C8.52681 4 9.46216 4.08495 10.3872 4.19094C11.2909 4.29447 12.2338 4.4249 13.1059 4.49673L13.2701 2.50347C12.4386 2.43499 11.5875 2.31537 10.6149 2.20393C9.66354 2.09494 8.64013 2 7.5669 2L7.5669 4ZM13.1059 4.49673C13.7221 4.54748 14.157 4.56049 14.4698 4.54956C14.7555 4.53958 15.0364 4.50829 15.2776 4.40382C15.4199 4.34219 15.5762 4.24351 15.7066 4.08533C15.7684 4.01034 15.8058 3.9433 15.8132 3.93016C15.8229 3.91313 15.7984 3.95821 15.767 4.00328C15.7347 4.04975 15.6369 4.18455 15.4566 4.29076C14.9977 4.56114 14.5753 4.3555 14.5338 4.33611C14.4603 4.30178 14.4037 4.26214 14.4266 4.27711C14.4339 4.28191 14.4792 4.31251 14.5426 4.35152L15.5912 2.64848C15.5598 2.62914 15.55 2.62213 15.5239 2.60501C15.5175 2.60086 15.5028 2.59118 15.4851 2.58042C15.4702 2.57135 15.4317 2.5481 15.3807 2.52426C15.3312 2.50113 14.9039 2.29504 14.4413 2.56763C14.2592 2.67494 14.1598 2.81152 14.1258 2.86035C14.1056 2.88936 14.0911 2.91336 14.0847 2.92416C14.0811 2.93025 14.0783 2.93519 14.0768 2.93784C14.076 2.93924 14.0753 2.9404 14.0749 2.94107C14.0748 2.94136 14.0746 2.94172 14.0745 2.94189C14.0744 2.94206 14.0743 2.94218 14.0743 2.94223C14.0737 2.94318 14.0848 2.92345 14.1001 2.89964C14.1166 2.87419 14.1374 2.84465 14.1633 2.81325C14.2766 2.67576 14.4023 2.60338 14.4826 2.56863C14.5996 2.51793 14.631 2.54271 14.3999 2.55078C14.196 2.55791 13.8469 2.55098 13.2701 2.50347L13.1059 4.49673ZM14.0719 12.148C13.0928 12.3617 12.2093 12.6946 11.4494 13.7161C10.7702 14.629 10.2306 16.0437 9.60559 18.2245L11.5282 18.7755C12.1567 16.5825 12.6171 15.4972 13.054 14.9099C13.4103 14.431 13.7592 14.2633 14.4984 14.102L14.0719 12.148ZM7.37884 17.9454C8.37492 18.0338 8.37492 18.0339 8.37492 18.0339C8.37492 18.0339 8.37492 18.0339 8.37492 18.0339C8.37492 18.0338 8.37493 18.0337 8.37494 18.0336C8.37497 18.0333 8.37501 18.0329 8.37507 18.0322C8.37519 18.0309 8.37538 18.0288 8.37563 18.0259C8.37615 18.0202 8.37693 18.0116 8.37799 18C8.3801 17.977 8.38329 17.9427 8.38751 17.8983C8.39595 17.8095 8.40851 17.6806 8.42484 17.522C8.45754 17.2044 8.50516 16.7694 8.56491 16.2986C8.68923 15.3191 8.85193 14.3072 9.01558 13.8162L7.11821 13.1838C6.88186 13.8928 6.70053 15.1036 6.58083 16.0468C6.51856 16.5374 6.46917 16.9888 6.43536 17.3172C6.41843 17.4816 6.40536 17.6157 6.39648 17.709C6.39205 17.7557 6.38865 17.7922 6.38635 17.8173C6.3852 17.8299 6.38432 17.8396 6.38372 17.8462C6.38342 17.8496 6.38319 17.8522 6.38303 17.854C6.38295 17.8549 6.38288 17.8556 6.38284 17.8561C6.38282 17.8563 6.3828 17.8565 6.38278 17.8567C6.38278 17.8568 6.38277 17.8569 6.38277 17.8569C6.38276 17.857 6.38275 17.857 7.37884 17.9454ZM20.0669 13.4999L16.0669 13.4999L16.0669 15.4999L20.0669 15.4999L20.0669 13.4999ZM16.0669 13.4999L16.0669 3.5L14.0669 3.5L14.0669 13.4999L16.0669 13.4999ZM16.0669 3.49988L20.0669 3.49988L20.0669 1.49988L16.0669 1.49988L16.0669 3.49988ZM20.0669 3.49988L20.0669 13.4999L22.0669 13.4999L22.0669 3.49988L20.0669 3.49988ZM20.0669 3.49988L20.0669 3.49988L22.0669 3.49988C22.0669 2.39531 21.1715 1.49988 20.0669 1.49988L20.0669 3.49988ZM16.0669 3.5L16.0669 3.49988L16.0669 1.49988C14.9622 1.49988 14.0669 2.39559 14.0669 3.5L16.0669 3.5ZM16.0669 13.4999L14.0669 13.4999C14.0669 14.6044 14.9623 15.4999 16.0669 15.4999L16.0669 13.4999ZM20.0669 15.4999C21.1715 15.4999 22.0669 14.6044 22.0669 13.4999L20.0669 13.4999L20.0669 15.4999Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default Dislike;