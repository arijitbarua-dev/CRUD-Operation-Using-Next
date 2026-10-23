import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const UsersCard = ({user}) => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <CardHeader>
                <CardAction>
                    <h2>No Action</h2>
                </CardAction>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>
                    Email: {user.email}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href={`/users/${user._id}`}>
                    <Button className="w-full">View Details</Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default UsersCard;