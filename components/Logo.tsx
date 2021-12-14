import type { FC } from 'react'
import Link from 'next/link'

export const Logo: FC = () => {
  return (
    <div className="w-8">
      <Link href="/">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 83"
            className="fill-current text-indigo-900"
          >
            <g
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              transform="translate(0 .75)"
            >
              <path d="M66.4170158 81.8359621L38.4508896 12.7971924 10.4832618 81.8359621 0.0435457413 81.8359621 34.2457224 0 42.1102334 0 76.078164 81.8359621z"></path>
              <path d="M41.4983407 0.750788644L34.8568644 0.750788644 1.42349527 81.0851735 9.86686435 81.0851735 38.4508896 10.5208013 67.0334132 81.0851735 74.7049716 81.0851735z"></path>
              <path d="M70.207 81.837l-3.582-9.01h29.123c1.644 0 3.328-.467 5.296-1.388 1.448-.679 2.864-1.783 4.34-3.341a14.732 14.732 0 002.912-4.56 13.865 13.865 0 001.056-5.328c0-1.84-.31-3.593-.955-5.348a13.818 13.818 0 00-2.693-4.495c-1.077-1.204-2.388-2.562-4.125-3.452-1.341-.682-2.895-1.37-5.041-1.37h-24.05l-3.75-6.756h24.647c2.812 0 5.22-1.223 8.15-4.148.376-.377.655-.815.96-1.159a14.004 14.004 0 002.64-4.372c.641-1.67.955-3.37.955-5.197 0-1.902-.29-3.603-.907-5.347-.546-1.541-1.322-2.834-2.52-4.188-1.057-1.188-2.343-1.83-3.836-2.576-.6-.3-1.282-.428-2.285-.428-.38 0-42.674.662-42.674.662L50.288 0h46.25c2.798 0 5.514.242 7.972 1.553 2.494 1.33 4.384 2.492 6.017 4.475 1.634 1.985 2.92 4.308 3.815 6.84.895 2.534 1.346 5.134 1.346 7.697 0 4.204-1.064 8.1-3.17 11.57-1.738 2.865-4.055 5.161-6.912 6.843 3.808 1.51 6.927 3.918 9.289 7.177 2.77 3.822 4.173 8.341 4.173 13.426 0 3.16-.634 6.094-1.89 8.725-1.309 2.74-3.008 5.07-5.052 6.923-2.377 2.157-4.862 3.686-7.386 4.634-2.602.974-5.655 1.974-8.992 1.974H70.207z"></path>
              <path d="M114.154 46.695c-2.666-3.676-6.286-6.19-10.864-7.541 3.604-1.65 6.417-4.144 8.443-7.486 2.026-3.338 3.039-7.037 3.039-11.087 0-2.476-.435-4.935-1.295-7.375-.862-2.437-2.081-4.614-3.658-6.53-1.576-1.911-3.49-3.195-5.74-4.397-2.253-1.2-4.766-1.529-7.542-1.529H51.63l2.863 7.508h39.57c1.874 0 3.6-.198 5.176.588 1.577.791 2.944 1.546 4.11 2.857 1.161 1.314 2.061 2.721 2.702 4.524.633 1.799.955 3.639.955 5.667 0 1.95-.336 3.771-1.014 5.532a15.025 15.025 0 01-2.813 4.656c-1.204 1.35-2.645 2.56-4.334 3.384-1.689.829-3.51 2.073-5.46 2.073H70.337l2.679 6.007h23.522c1.95 0 3.773.15 5.458 1.012 1.69.863 3.154 1.849 4.392 3.238a14.58 14.58 0 012.87 4.769 16.176 16.176 0 011.014 5.65c0 1.95-.377 3.827-1.126 5.667a15.522 15.522 0 01-3.095 4.83c-1.317 1.39-2.853 2.274-4.618 3.1-1.763.826-3.657 1.016-5.684 1.016h-27.78l2.865 8.259H95.75c3.076 0 5.966-.985 8.667-1.999 2.701-1.012 5.067-2.676 7.093-4.515 2.026-1.837 3.64-4.133 4.84-6.65 1.199-2.514 1.803-5.33 1.803-8.334 0-4.878-1.334-9.214-3.998-12.894z"></path>
            </g>
          </svg>
        </a>
      </Link>
    </div>
  )
}