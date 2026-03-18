import LegalPageLayout from "../components/legal/legal-page-layout";

const sections = [
    {
        title: "1. Agreement overview",
        content: (
            <>
                <p>
                    These Terms of Service govern access to and use of the Agentix website, applications, APIs, sender tools, analytics features, and related services.
                    By creating an account, accessing the platform, or using any part of the service, you agree to be bound by these Terms on behalf of yourself or the business you represent.
                </p>
                <p>
                    If you are using the service for an organization, you represent that you have authority to bind that organization to these Terms and that all users under your account will comply with them.
                </p>
            </>
        ),
    },
    {
        title: "2. Eligibility and account responsibilities",
        content: (
            <>
                <p>
                    You must provide accurate registration information, keep credentials confidential, and promptly update account details when they change.
                    You are responsible for all activity occurring under your account, including activity by team members, contractors, and connected applications.
                </p>
                <p>
                    You may not use the service if you are barred from doing so under applicable law, are listed on a sanctions or restricted-party list,
                    or intend to use Agentix for unlawful, deceptive, or abusive messaging practices.
                </p>
            </>
        ),
    },
    {
        title: "3. Acceptable use for email and messaging services",
        content: (
            <>
                <p>You agree not to use Agentix to:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Send unsolicited, deceptive, fraudulent, defamatory, harassing, or unlawful communications.</li>
                    <li>Transmit malware, phishing content, credential-harvesting campaigns, or messages intended to evade detection or filtering systems.</li>
                    <li>Use purchased, scraped, rented, or otherwise non-permission-based mailing lists where such use violates law, mailbox provider rules, or our policies.</li>
                    <li>Misrepresent sender identity, domain ownership, business affiliation, or message purpose.</li>
                    <li>Interfere with the service, bypass usage limits, reverse engineer restricted components, or test vulnerabilities without authorization.</li>
                </ul>
                <p>
                    We may monitor compliance, review sender reputation signals, require list or domain verification, throttle or suspend sending, and remove content that creates legal, security,
                    or deliverability risk for the platform or third parties.
                </p>
            </>
        ),
    },
    {
        title: "4. Customer data and compliance obligations",
        content: (
            <>
                <p>
                    You retain responsibility for the legality, quality, accuracy, and integrity of the data and content you submit to the service.
                    This includes obtaining appropriate rights and permissions for contact lists, honoring unsubscribe requests, maintaining suppression lists,
                    and complying with laws and standards applicable to electronic communications, privacy, consumer protection, and recordkeeping.
                </p>
                <p>
                    If you process personal information through Agentix, you agree to provide required notices, secure a lawful basis for processing, and enter into any required data processing terms.
                </p>
            </>
        ),
    },
    {
        title: "5. Subscription plans, fees, and billing",
        content: (
            <>
                <p>
                    Paid features are provided under the subscription plan, order form, or pricing page then in effect. You authorize Agentix and its payment processors to charge applicable fees,
                    taxes, and overage amounts using your selected payment method.
                </p>
                <p>
                    Unless otherwise stated, subscriptions renew automatically for successive terms equal to the initial term. You are responsible for canceling before renewal if you do not want the next term charged.
                    Fees are generally non-refundable except where required by law or expressly stated in a written agreement.
                </p>
            </>
        ),
    },
    {
        title: "6. Service changes, suspensions, and availability",
        content: (
            <>
                <p>
                    We may modify, update, or discontinue features from time to time. We also may suspend or limit access where reasonably necessary for security, abuse prevention,
                    nonpayment, legal compliance, emergency maintenance, or protection of system integrity.
                </p>
                <p>
                    While we work to provide reliable services, uptime and message delivery can be affected by third-party networks, mailbox providers, internet conditions,
                    customer configuration choices, and events beyond our control. Delivery is not guaranteed to every recipient inbox.
                </p>
            </>
        ),
    },
    {
        title: "7. Intellectual property and feedback",
        content: (
            <>
                <p>
                    Agentix and its licensors retain all rights, title, and interest in the service, software, documentation, branding, designs, analytics models, and derivative works,
                    except for customer data and content that remain subject to your underlying rights.
                </p>
                <p>
                    You grant us the limited rights needed to host, copy, transmit, process, and display customer data solely to provide and secure the service. If you provide feedback,
                    suggestions, or feature requests, we may use them without restriction or obligation.
                </p>
            </>
        ),
    },
    {
        title: "8. Confidentiality and security cooperation",
        content: (
            <>
                <p>
                    Each party may receive non-public information from the other that should reasonably be understood as confidential. The receiving party will protect such information using reasonable care
                    and will use it only as necessary to perform under these Terms, except where disclosure is required by law.
                </p>
                <p>
                    You agree to promptly notify Agentix of unauthorized account access, suspicious campaigns, security incidents, or legal notices relating to your use of the service where such notice could help mitigate harm.
                </p>
            </>
        ),
    },
    {
        title: "9. Disclaimers and limitation of liability",
        content: (
            <>
                <p>
                    To the maximum extent permitted by law, the service is provided on an "as is" and "as available" basis without warranties of any kind, whether express, implied, statutory, or otherwise,
                    including warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability.
                </p>
                <p>
                    To the maximum extent permitted by law, Agentix will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, loss of profits, revenues, goodwill, data,
                    or business opportunities. Our aggregate liability arising out of or relating to the service will not exceed the amounts paid by you to Agentix for the service during the twelve months preceding the claim.
                </p>
            </>
        ),
    },
    {
        title: "10. Termination",
        content: (
            <>
                <p>
                    You may stop using the service at any time. We may terminate or suspend your access immediately if you materially breach these Terms,
                    create unacceptable abuse or reputational risk, fail to pay fees when due, or if continued service would expose Agentix or others to legal or security harm.
                </p>
                <p>
                    Upon termination, rights granted to you under these Terms will end, but provisions that by their nature should survive will remain in effect,
                    including payment obligations, intellectual property protections, confidentiality duties, disclaimers, liability limitations, and dispute-related clauses.
                </p>
            </>
        ),
    },
    {
        title: "11. Governing law and changes to these Terms",
        content: (
            <>
                <p>
                    These Terms are governed by the laws stated in your applicable order form or, if none is stated, the laws of the jurisdiction where Agentix is established, without regard to conflict-of-law rules.
                    Venue for disputes will lie in the competent courts of that jurisdiction unless otherwise required by law.
                </p>
                <p>
                    We may update these Terms from time to time. When changes are material, we may provide notice through the service, via email, or on our website. Continued use after the updated Terms take effect
                    constitutes acceptance of the revised Terms to the extent permitted by law.
                </p>
            </>
        ),
    },
];

export default function TermsOfServicePage() {
    return (
        <LegalPageLayout
            eyebrow="Legal"
            title="Terms of Service"
            intro="These Terms are structured for a business that offers email software, campaign automation, and messaging infrastructure. They set expectations around acceptable use, account administration, billing, deliverability, compliance, and platform risk management."
            effectiveDate="March 18, 2026"
            sections={sections}
        />
    );
}
