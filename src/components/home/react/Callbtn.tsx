const CallBtn = () => {
    return (

<div className="flex flex-col sm:flex-row mx-4 justify-center mt-12 gap-3">
    <div>
      <a href="tel:855-871-53321">
        <div
          className="flex py-3 px-8 rounded-[6px] bg-secondary hover:bg-primary text-text hover:text-white transition-colors w-full flex-col justify-center items-center gap-1"
        >
          <div className="w-full flex items-center justify-center gap-2">
            <svg
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.8786 1.55176C7.43615 1.55176 9.66637 6.166 9.66637 6.67869C9.66637 7.70408 7.9937 8.72946 7.43615 9.75485C6.8786 10.7802 7.9937 11.8056 9.10881 12.831C9.5437 13.2309 11.339 14.8818 12.4541 14.3691C13.5692 13.8564 14.6844 12.3183 15.7995 12.3183C16.357 12.3183 21.375 14.3691 21.375 14.8818C21.375 16.9326 19.7023 18.4706 18.0297 18.9833C16.357 19.496 15.2419 19.496 13.0117 18.9833C10.7815 18.4706 9.10881 17.9579 6.32104 15.3945C3.53327 12.831 2.97572 11.2929 2.41817 9.24216C1.86061 7.19138 1.86061 6.166 2.41817 4.62792C2.97572 3.08984 4.64838 1.55176 6.8786 1.55176Z"
                stroke="currentColor"
                stroke-width="2.23022"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
                d="M13.5692 5.69421C14.3052 6.01208 14.9743 6.44275 15.5318 6.96569C16.0782 7.46813 16.5354 8.07311 16.87 8.72936"
                stroke="currentColor"
                stroke-width="2.23022"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
                d="M14.6843 1.80798C16.2566 2.18738 17.6617 2.93591 18.7768 3.9613C19.8807 4.98668 20.6948 6.26842 21.0962 7.70396"
                stroke="currentColor"
                stroke-width="2.23022"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
           
          </div>

          <p className="text-xl font-semibold">(855)-871-53321 </p>
        </div>
      </a>
    </div>

  </div>
    );
};
export default CallBtn;