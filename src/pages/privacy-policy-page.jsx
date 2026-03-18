import LegalPageLayout from "../components/legal/legal-page-layout";

const sections = [
    {
        title: "1. Scope of this policy",
        content: (
            <>
                <p>
                    This Privacy Policy explains how Agentix collects, uses, stores, shares, and protects personal information when businesses,
                    subscribers, site visitors, and integration partners use our website, marketing pages, email delivery platform, analytics tools,
                    customer support channels, and related services.
                </p>
                <p>
                    The policy is designed for an email software and messaging infrastructure business, which means it covers account-level data,
                    billing details, sender identity records, campaign content, recipient engagement events, suppression lists, API usage metadata,
                    and compliance information needed to help our customers send lawful and reliable communications.
                </p>
            </>
        ),
    },
    {
        title: "2. Information we collect",
        content: (
            <>
                <p>We may collect the following categories of information:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Identity and business profile information, such as names, company names, job titles, mailing addresses, and phone numbers.</li>
                    <li>Account credentials and security details, including email addresses, hashed passwords, single sign-on identifiers, and multifactor authentication settings.</li>
                    <li>Billing and transaction records, such as subscription plans, invoice history, payment status, tax identifiers, and procurement contacts.</li>
                    <li>Technical and usage information, including IP addresses, device identifiers, browser details, cookies, campaign events, API logs, and product interaction analytics.</li>
                    <li>Customer content submitted through the service, including mailing lists, templates, campaign copy, segmentation rules, automations, attachments, and suppression preferences.</li>
                    <li>Support and compliance records, such as onboarding questionnaires, abuse reports, sender verification materials, and communications with our sales, support, or legal teams.</li>
                </ul>
            </>
        ),
    },
    {
        title: "3. How we use personal information",
        content: (
            <>
                <p>We use personal information to operate and improve the service, including to:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Create and administer customer accounts, authenticate users, and manage permissions across workspaces and team members.</li>
                    <li>Process payments, issue invoices, prevent fraud, and maintain accounting and tax records.</li>
                    <li>Provide email delivery, campaign scheduling, message routing, webhook processing, template rendering, and reporting dashboards.</li>
                    <li>Monitor platform performance, troubleshoot incidents, detect abuse, and protect deliverability for customers and mailbox providers.</li>
                    <li>Personalize onboarding, product education, and support experiences, including proactive guidance tied to account usage.</li>
                    <li>Comply with legal obligations, enforce our contracts, and respond to lawful requests, disputes, or security investigations.</li>
                </ul>
            </>
        ),
    },
    {
        title: "4. Legal bases and consent choices",
        content: (
            <>
                <p>
                    Where required by applicable law, we process personal information on one or more legal bases, including performance of a contract,
                    legitimate interests in operating a secure and effective messaging platform, compliance with legal obligations, and consent.
                </p>
                <p>
                    Customers are responsible for establishing an appropriate legal basis for the contact data they upload into Agentix, including consent
                    where required for marketing communications, and for honoring opt-out requests, unsubscribe preferences, and regional privacy rights.
                </p>
            </>
        ),
    },
    {
        title: "5. Cookies, analytics, and similar technologies",
        content: (
            <>
                <p>
                    We use cookies, local storage, pixels, and similar technologies to remember settings, maintain authenticated sessions, analyze site traffic,
                    understand product engagement, and measure the performance of our marketing and lifecycle emails.
                </p>
                <p>
                    Depending on your location, you may be able to manage cookie preferences through browser settings or a consent banner. Disabling some cookies
                    may affect login persistence, dashboard functionality, attribution reporting, or preference management.
                </p>
            </>
        ),
    },
    {
        title: "6. Email data, tracking, and deliverability operations",
        content: (
            <>
                <p>
                    Because Agentix is an email software provider, we process message headers, routing information, delivery status, bounce data, spam complaint data,
                    unsubscribe events, open and click tracking events where enabled, and mailbox provider feedback to deliver the service and preserve sender reputation.
                </p>
                <p>
                    We may scan message content and metadata using automated systems for security, anti-abuse, malware prevention, authentication validation, and compliance reviews.
                    We do not use customer campaign content for unrelated advertising profiling, and we limit access to customer data to authorized personnel and processors with a business need.
                </p>
            </>
        ),
    },
    {
        title: "7. How we share information",
        content: (
            <>
                <p>We may share information with the following categories of recipients:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Infrastructure, hosting, analytics, payment, customer support, and security service providers acting on our instructions.</li>
                    <li>Integration partners and third-party applications that a customer chooses to connect to their workspace.</li>
                    <li>Professional advisers, auditors, insurers, and financing counterparties where reasonably necessary for business operations.</li>
                    <li>Law enforcement, regulators, courts, or other parties when required by law or needed to protect the rights, safety, and integrity of Agentix, our customers, or the public.</li>
                    <li>An acquiring entity or successor in connection with a merger, financing, acquisition, reorganization, or sale of assets, subject to customary confidentiality protections.</li>
                </ul>
            </>
        ),
    },
    {
        title: "8. International transfers and data retention",
        content: (
            <>
                <p>
                    Agentix may store and process information in countries other than the one in which it was collected. When we transfer personal information across borders,
                    we use contractual, technical, and organizational safeguards that are appropriate for the transfer and required under applicable law.
                </p>
                <p>
                    We retain personal information for as long as needed to provide the service, maintain legitimate business records, resolve disputes, enforce agreements,
                    comply with legal obligations, and preserve abuse-prevention and deliverability controls. Retention periods vary based on data type, customer settings,
                    regulatory requirements, and backup schedules.
                </p>
            </>
        ),
    },
    {
        title: "9. Security practices",
        content: (
            <>
                <p>
                    We maintain administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, destruction, loss,
                    alteration, or disclosure. These safeguards may include encryption in transit, access controls, audit logging, environment segregation, vendor review,
                    incident response procedures, and role-based permissioning.
                </p>
                <p>
                    No system is completely secure, and customers also play an important role by using strong credentials, limiting workspace access, configuring domain authentication,
                    and reporting suspected misuse quickly.
                </p>
            </>
        ),
    },
    {
        title: "10. Your privacy rights",
        content: (
            <>
                <p>
                    Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, object to certain processing, or receive a portable copy of your personal information.
                    You may also have the right to withdraw consent where processing depends on consent and to appeal certain privacy decisions.
                </p>
                <p>
                    We may need to verify your identity before fulfilling a request and may decline or limit requests where permitted by law. Customers using Agentix as a processor remain responsible
                    for responding to subscriber requests tied to mailing list data they control.
                </p>
            </>
        ),
    },
    {
        title: "11. Contact information and policy updates",
        content: (
            <>
                <p>
                    Questions about this Privacy Policy, security practices, or data processing requests can be directed to privacy@agentix.example. If we make material changes,
                    we may update the effective date above and provide notice through the product, by email, or through our website where appropriate.
                </p>
                <p>
                    Continued use of the service after an update becomes effective is subject to the revised policy to the extent allowed by law.
                </p>
            </>
        ),
    },
];

export default function PrivacyPolicyPage() {
    return (
        <LegalPageLayout
            eyebrow="Legal"
            title="Privacy Policy"
            intro="This policy outlines how Agentix handles personal information in connection with our website, customer accounts, email delivery products, and support operations. It is written to reflect the operational realities and compliance expectations of a modern email software and messaging services company."
            effectiveDate="March 18, 2026"
            sections={sections}
        />
    );
}
