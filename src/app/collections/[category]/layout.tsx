import InstagramFeed from "@/components/homepage component/InstagramFeed";

export default function CollectionsLayout({children}: {children: React.ReactNode}) {
    return (
        
            <div>
                {children}
                <div>
                    <InstagramFeed />
                </div>
            </div>
        
    )
}