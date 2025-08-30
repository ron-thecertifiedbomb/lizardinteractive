import {
    LizardContent,
    LizardDiv,
    LizardText,
    LizardImage,
} from '@/components/common/LizardComponents';

interface LizardCenterScreenProps<T> {
    heading?: string;
    content: T[] | T;
}

export function LizardCenterScreen<T extends object>({ heading, content }: LizardCenterScreenProps<T>) {
    const items = Array.isArray(content) ? content : [content];

    const renderItem = (item: T, index: number) => {
        // Project type
        if ('title' in item && 'description' in item && 'imageSrc' in item) {
            return (
                <LizardDiv key={index} className="flex flex-col items-center border p-2 mb-4 rounded-md w-full max-w-md">
                    <LizardImage src={(item as any).imageSrc} alt={(item as any).imageAlt} className="w-full h-auto mb-2" />
                    <LizardText variant="h2" className="font-bold">{(item as any).title}</LizardText>
                    <LizardText>{(item as any).description}</LizardText>
                </LizardDiv>
            );
        }

        // Skill type
        if ('type' in item && 'title' in item && 'description' in item) {
            return (
                <LizardDiv key={index} className="flex flex-col items-center border p-2 mb-4 rounded-md w-full max-w-md">
                    <LizardImage src={(item as any).imageSrc} alt={(item as any).imageAlt} className="w-12 h-12 mb-2" />
                    <LizardText variant="h2" className="font-bold">{(item as any).title}</LizardText>
                    <LizardText>{(item as any).description}</LizardText>
                    {(item as any).techStack && (
                        <div className="flex flex-wrap gap-1 mt-1">
                            {(item as any).techStack.map((tech: string, i: number) => (
                                <LizardText key={i} className="text-sm bg-gray-800 px-2 py-1 rounded">{tech}</LizardText>
                            ))}
                        </div>
                    )}
                </LizardDiv>
            );
        }

        // Fallback for string/other objects
        return <LizardText key={index}>{JSON.stringify(item)}</LizardText>;
    };

    return (
        <LizardContent className="box-content w-full flex flex-col flex-1 items-center justify-center">
            <LizardDiv className="border-white h-auto w-full flex flex-col justify-center items-center rounded-sm p-4">
                {heading && <LizardText className="text-xl font-bold mb-4">{heading}</LizardText>}
                {items.map(renderItem)}
            </LizardDiv>
        </LizardContent>
    );
}
