package model

import play.api.libs.json.{Json, Reads, Writes}

case class User(email: String, var password: String, var token: Option[String])

object User {
  implicit val reads: Reads[User] = Json.reads[User]
  implicit val writes: Writes[User] = Json.writes[User]
}