const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
      </div>
    );
}

export default AuthLayout