/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: () => {
        let complerConfig = {
            // styledComponents 활성화
            styledComponents: true,
        };

        if (process.env.NODE_ENV === 'production') {
            complerConfig = {
                ...complerConfig,
                // 프로덕션 환경에서는 리액트 테스팅 라이브러리에서 사용하는 data-testid 속성을 삭제
                reactRemoveProperties: { properties: ['^data-testid$'] },
            };
        }
        return complerConfig;
    },
};

module.exports = nextConfig;
