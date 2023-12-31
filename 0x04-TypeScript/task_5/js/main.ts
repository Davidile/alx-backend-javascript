interface MajorCredits {
    credits: number;
    readonly brand: 'Major';
}

interface MinorCredits {
    credits: number;
    readonly brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return subject1.credits + subject2.credits;
}
