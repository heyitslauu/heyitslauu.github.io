import { ArrowLeft, CheckCircle2, GitBranch, Server, ShieldCheck, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    service: "exID API",
    image: "exid-api:1",
    desired: "3",
    min: "1",
    max: "10",
    target: "CPU 60%",
    port: "3000",
    cpu: "512",
    memory: "512",
    reservation: "384",
  },
  {
    service: "FSDS API",
    image: "fsds-api:1",
    desired: "5",
    min: "2",
    max: "15",
    target: "CPU 60%",
    port: "3000",
    cpu: "512",
    memory: "512",
    reservation: "384",
  },
  {
    service: "exGUARD API",
    image: "exguard-api:1",
    desired: "2",
    min: "1",
    max: "8",
    target: "CPU 60%",
    port: "3000",
    cpu: "512",
    memory: "512",
    reservation: "384",
  },
];

const routingRules = [
  {
    service: "exID API",
    condition: "exid.example.com or /exid/*",
    action: "Forward to exID API target group",
  },
  {
    service: "FSDS API",
    condition: "fsds.example.com or /fsds/*",
    action: "Forward to FSDS API target group",
  },
  {
    service: "exGUARD API",
    condition: "exguard.example.com or /exguard/*",
    action: "Forward to exGUARD API target group",
  },
  {
    service: "Default",
    condition: "No host or path match",
    action: "404 Not Found",
  },
];

const databases = [
  {
    service: "exID DB",
    instance: "db-exid-01",
    ip: "10.0.10.10",
    port: "5432",
    volume: "vol-exid-01",
    size: "100 GiB",
    type: "gp3",
    policy: "Retain",
  },
  {
    service: "FSDS DB",
    instance: "db-fsds-01",
    ip: "10.0.20.10",
    port: "5432",
    volume: "vol-fsds-01",
    size: "100 GiB",
    type: "gp3",
    policy: "Retain",
  },
  {
    service: "exGUARD DB",
    instance: "db-exguard-01",
    ip: "10.0.30.10",
    port: "5432",
    volume: "vol-exguard-01",
    size: "100 GiB",
    type: "gp3",
    policy: "Retain",
  },
];

const benefits = [
  "Shared cluster capacity across multiple APIs",
  "Independent desired counts and autoscaling per service",
  "Lower operational overhead than one ECS cluster per service",
  "Clear ownership boundaries for each API and database",
  "Safer database persistence through retained EBS volumes",
  "Repeatable deployments through CloudFormation and Jenkins",
];

const risks = [
  "Shared cluster capacity can create noisy-neighbor behavior if one service consumes too much compute.",
  "EC2 capacity must scale before ECS can place additional service tasks.",
  "Per-service database EC2 instances need patching, backups, monitoring, and recovery planning.",
  "ALB host and path rules must be reviewed to avoid routing conflicts.",
  "Retained EBS volumes protect data, but they still need lifecycle and cost management.",
  "Capacity numbers should be reviewed because the diagram contains an inconsistency.",
];

const checklist = [
  "Shared ECS cluster exists.",
  "ALB listener and routing rules are configured.",
  "Target groups exist per service.",
  "Task definition exists per service.",
  "Desired count and autoscaling are configured per service.",
  "Database EC2 and retained EBS exist per service.",
  "Jenkins or CI/CD can deploy by environment and service.",
  "CloudFormation templates validate successfully.",
  "Rollback and backup strategy are documented.",
];

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-normal text-foreground">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ResponsiveTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead className="bg-muted/60 text-xs uppercase text-muted-foreground">
          <tr>
            {headers.map((header) => (
              <th key={header} className="border-b border-border px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="odd:bg-card/50">
              {row.map((cell) => (
                <td key={cell} className="border-b border-border px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function InfrastructureAutomationCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container py-12 sm:py-16">
        <Button asChild variant="ghost" size="sm" className="mb-8">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </Button>

        <section className="max-w-4xl">
          <Badge variant="outline" className="mb-5">
            AWS ECS / CloudFormation / Jenkins
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-normal sm:text-5xl">
            Infrastructure Automation Case Study
          </h1>
          <p className="mt-4 text-xl font-semibold text-primary">
            Single ECS Cluster, Multiple Services, Independent Desired Task
            Counts
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            This architecture uses one shared Amazon ECS cluster backed by EC2
            capacity while allowing each API service to keep its own task
            definition, desired count, autoscaling range, routing rule, and
            per-service database ownership.
          </p>
        </section>

        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card">
          <img
            src="/CASE_STUDY.png"
            alt="Architecture diagram for a shared ECS cluster with independent API services and per-service databases"
            className="w-full bg-white"
          />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                Shared Capacity
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              One ECS cluster provides EC2-backed container capacity for
              multiple API services.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                Independent Scaling
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              Each service keeps its own desired count, minimum, maximum, and
              CPU target tracking policy.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Retained Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              Databases are separated per service, with retained EBS volumes to
              reduce accidental data-loss risk.
            </CardContent>
          </Card>
        </div>

        <div className="mt-14 space-y-14">
          <CaseSection title="Problem / Motivation">
            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
              The goal is to deploy multiple API services without creating and
              operating a completely separate ECS cluster for each one. The
              platform needs repeatable deployment, clear service ownership,
              independent scaling controls, retained database storage, and a
              predictable way for CI/CD to promote infrastructure changes.
            </p>
          </CaseSection>

          <CaseSection title="High-Level Architecture">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                "Users access the system through a web browser, mobile app, or API client.",
                "A shared Application Load Balancer receives HTTPS traffic on port 443.",
                "ALB listener rules route requests by host-header or path to the correct target group.",
                "A shared EC2-backed ECS cluster runs exID, FSDS, and exGUARD API services.",
                "Each service has independent desired task count and autoscaling policy.",
                "Each service owns a separate database EC2 instance with a retained EBS volume.",
              ].map((item) => (
                <Card key={item} className="bg-card/80">
                  <CardContent className="p-4 text-sm leading-6 text-muted-foreground">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CaseSection>

          <CaseSection title="Request Flow">
            <Card className="bg-card/80">
              <CardContent className="flex flex-wrap items-center gap-3 p-5 text-sm font-medium">
                {[
                  "Users",
                  "Application Load Balancer",
                  "Target Group",
                  "ECS Service Tasks",
                  "Per-service Database",
                ].map((step, index, flow) => (
                  <span key={step} className="flex items-center gap-3">
                    <span className="rounded-md border border-border bg-muted px-3 py-2">
                      {step}
                    </span>
                    {index < flow.length - 1 ? (
                      <span className="text-primary">→</span>
                    ) : null}
                  </span>
                ))}
              </CardContent>
            </Card>
          </CaseSection>

          <CaseSection title="Shared ECS Cluster Capacity">
            <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
              <Card>
                <CardContent className="space-y-3 p-5 text-sm leading-6 text-muted-foreground">
                  <p>
                    ECS cluster capacity is shared across all services and is
                    backed by EC2 container instances. The diagram shows a
                    current deployment using <strong>2 t4g.large</strong>{" "}
                    instances with an adjustable capacity range of{" "}
                    <strong>3 to 10 instances</strong>.
                  </p>
                  <p>
                    This means service scaling and cluster scaling need to work
                    together: ECS service autoscaling can request more tasks,
                    but the EC2 capacity provider or autoscaling group must have
                    enough compute to place them.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/40 bg-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TriangleAlert className="h-5 w-5" />
                    Diagram Note
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  The diagram contains a capacity inconsistency. It labels total
                  shared capacity as <strong>8 vCPU / 16 GiB memory</strong> for
                  two t4g.large instances, while each instance box shows{" "}
                  <strong>2 vCPU / 4 GiB memory</strong>. This page documents
                  those values as shown and treats the mismatch as an assumption
                  to review during implementation.
                </CardContent>
              </Card>
            </div>
          </CaseSection>

          <CaseSection title="Service Deployment Model">
            <ResponsiveTable
              headers={[
                "Service",
                "Container image/tag",
                "Desired tasks",
                "Min tasks",
                "Max tasks",
                "CPU target",
                "Container port",
                "CPU",
                "Memory",
                "Memory reservation",
              ]}
              rows={services.map((service) => [
                service.service,
                service.image,
                service.desired,
                service.min,
                service.max,
                service.target,
                service.port,
                service.cpu,
                service.memory,
                service.reservation,
              ])}
            />
          </CaseSection>

          <CaseSection title="ALB Routing Rules">
            <p className="mb-4 text-sm leading-7 text-muted-foreground">
              The shared ALB listens on HTTPS port 443 and can route traffic
              from <strong>alb.example.com</strong> by host-header or path.
            </p>
            <ResponsiveTable
              headers={["Service", "Host or path condition", "Action"]}
              rows={routingRules.map((rule) => [
                rule.service,
                rule.condition,
                rule.action,
              ])}
            />
          </CaseSection>

          <CaseSection title="Per-Service Database Ownership">
            <p className="mb-4 max-w-4xl text-sm leading-7 text-muted-foreground">
              Each API owns a separate database EC2 instance and retained EBS
              volume. This keeps data ownership explicit and reduces blast
              radius between services, while still requiring operational
              ownership for patching, backups, monitoring, and recovery.
            </p>
            <ResponsiveTable
              headers={[
                "Service",
                "DB instance",
                "Private IP",
                "Port",
                "EBS volume",
                "Size",
                "Type",
                "Deletion policy",
              ]}
              rows={databases.map((database) => [
                database.service,
                database.instance,
                database.ip,
                database.port,
                database.volume,
                database.size,
                database.type,
                database.policy,
              ])}
            />
          </CaseSection>

          <CaseSection title="Automation / How It Is Created">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                {
                  title: "Shared Infrastructure",
                  copy: "Creates the ECS cluster, ALB, base listener, routing foundation, security groups, and shared EC2 capacity.",
                },
                {
                  title: "Per-Service Stacks",
                  copy: "Create or update ECS services, target groups, listener rules, task definitions, autoscaling policies, database EC2 instances, and retained EBS volumes.",
                },
                {
                  title: "CI/CD Selection",
                  copy: "Jenkins or another CI/CD runner selects the target environment and service configuration, then deploys the appropriate CloudFormation stack.",
                },
                {
                  title: "Service Controls",
                  copy: "Desired count, minimum tasks, maximum tasks, and CPU target tracking are configured per service rather than globally.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-muted-foreground">
                    {item.copy}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Database EBS volumes should use a retain policy so accidental
              stack deletion or replacement does not automatically destroy
              service data.
            </p>
          </CaseSection>

          <CaseSection title="Benefits">
            <div className="grid gap-3 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-lg border border-border bg-card/80 p-4 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection title="Risks / Considerations">
            <div className="grid gap-3 md:grid-cols-2">
              {risks.map((risk) => (
                <div
                  key={risk}
                  className="flex gap-3 rounded-lg border border-border bg-card/80 p-4 text-sm text-muted-foreground"
                >
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{risk}</span>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection title="Implementation Checklist">
            <Card>
              <CardContent className="grid gap-3 p-5 md:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </CaseSection>
        </div>
      </main>
    </div>
  );
}
